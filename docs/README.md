testing #!/bin/sh [ -f /opt/aws/amazon-cloudwatch-agent/bin/config.json ] &&
exit

hostnamectl set-hostname gitlab-runner-coordinator-v4-production.localdomain

yum install -y amazon-cloudwatch-agent rsyslog

systemctl daemon-reload systemctl enable rsyslog --now

cat <<EOT > /opt/aws/amazon-cloudwatch-agent/bin/config.json { "agent": {
"metrics_collection_interval": 60, "run_as_user": "root" }, "logs": {
"logs_collected": { "files": { "collect_list": [ { "file_path":
"/var/log/messages", "log_group_class": "STANDARD", "log_group_name":
"/aws/ec2/gitlab-runner-coordinator", "log_stream_name": "{instance_id}",
"retention_in_days": 14 } ] } } }, "metrics": { "aggregation_dimensions": [ [
"InstanceId" ] ], "append_dimensions": { "AutoScalingGroupName":
"\${aws:AutoScalingGroupName}", "ImageId": "\${aws:ImageId}", "InstanceId":
"\${aws:InstanceId}", "InstanceType": "\${aws:InstanceType}" },
"metrics_collected": { "cpu": { "measurement": [ "cpu_usage_idle",
"cpu_usage_iowait", "cpu_usage_user", "cpu_usage_system" ],
"metrics_collection_interval": 60, "totalcpu": false }, "disk": { "measurement":
[ "used_percent", "inodes_free" ], "metrics_collection_interval": 60,
"resources": [ "_" ] }, "diskio": { "measurement": [ "io_time", "write_bytes",
"read_bytes", "writes", "reads" ], "metrics_collection_interval": 60,
"resources": [ "_" ] }, "mem": { "measurement": [ "mem_used_percent" ],
"metrics_collection_interval": 60 }, "netstat": { "measurement": [
"tcp_established", "tcp_time_wait" ], "metrics_collection_interval": 60 },
"swap": { "measurement": [ "swap_used_percent" ], "metrics_collection_interval":
60 } } } } EOT

/opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config
-m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json yum install
-y docker

# get latest from https://gitlab.com/gitlab-org/ci-cd/docker-machine/-/releases

curl -L --output /usr/local/bin/docker-machine
https://gitlab-docker-machine-downloads.s3.amazonaws.com/v0.16.2-gitlab.38/docker-machine-$(uname -s)-$(uname
-m) && chmod a+x /usr/local/bin/docker-machine

systemctl disable sshd.service sed -i '/sshd.service/d'
/etc/systemd/system/cloud-init.target.wants/cloud-init.service systemctl stop
sshd

systemctl daemon-reload systemctl start docker cat <<EOC >
/usr/local/bin/gitlab-runner-self-retire #!/bin/bash

[ -f /var/tmp/retire-initiated ] && exit

export CURRENT_INSTANCE_ID=\$(ls /var/lib/cloud/instances/)

export LATEST_INSTANCE_ID=\$(aws ec2 describe-instances --filters
"Name=tag:Name,Values=gitlab-runner-coordinator-v4-production" --query
"Reservations[_].Instances[_].{InstanceId:InstanceId,LaunchTime:LaunchTime}"
--output json | jq -r
'map(.[0])|sort_by(.LaunchTime)|reverse|first|.InstanceId')

if [ \$CURRENT_INSTANCE_ID == \$LATEST_INSTANCE_ID ]; then logger 'keep latest
instance' exit fi

touch /var/tmp/retire-initiated logger "retiring none active gitlab runner
coordinator instance \$CURRENT_INSTANCE_ID"

systemctl stop gitlab-runner

# following command doesen't work due to unknown reason :(

# docker-machine rm -f \$(docker-machine ls -q)

export RUNNING_EXECUTOR_IDS=\$(aws ec2 describe-instances --filters
"Name=tag:DockerMachineRunFrom,Values=\$CURRENT_INSTANCE_ID"
"Name=instance-state-name,Values=running,stopped" --query
"Reservations[_].Instances[_].{InstanceId:InstanceId,LaunchTime:LaunchTime}"
--output json | jq -r 'map(.[0].InstanceId)|join(" ")')

aws ec2 modify-instance-attribute --instance-id \$CURRENT_INSTANCE_ID
--no-disable-api-stop > /dev/null

logger "terminating \$CURRENT_INSTANCE_ID \$RUNNING_EXECUTOR_IDS" aws ec2
terminate-instances --instance-ids \$CURRENT_INSTANCE_ID \$RUNNING_EXECUTOR_IDS
> /dev/null

EOC chmod a+x /usr/local/bin/gitlab-runner-self-retire

cat <<EOD > /usr/lib/systemd/system/gitlab-runner-self-retire.service [Unit]
Description="Retire gitlab runner if not the latest"

[Service] ExecStart=/usr/local/bin/gitlab-runner-self-retire EOD

cat <<EOE > /usr/lib/systemd/system/gitlab-runner-self-retire.timer [Unit]
Description="Retire gitlab runner if not the latest every 5 minutes"

[Timer] OnCalendar=*:0/5 Unit=gitlab-runner-self-retire.service

[Install] WantedBy=timers.target

EOE

systemctl enable gitlab-runner-self-retire.timer systemctl start
gitlab-runner-self-retire.timer mkdir -p /etc/gitlab-runner\
cat <<EOT > /usr/local/bin/gitlab-runner-generate-config #!/bin/bash

eval "export \$( aws secretsmanager get-secret-value --secret-id
gitlab-runner-tokens-production | jq -r '.SecretString' | jq -r 'to_entries |
map("\(.key)=\(.value)") | @sh')"

export CURRENT_INSTANCE_ID=\$(ls /var/lib/cloud/instances/) aws s3 cp
s3://andopen-devops-iac-cicd-production-state/gitlab-runner-coordinator-v4-production/config.toml
/var/lib/cloud/data/gitlab-runner-config.template

eval "cat <<EOF \$(</var/lib/cloud/data/gitlab-runner-config.template) EOF " 2>
/dev/null > /etc/gitlab-runner/config.toml

EOT

chmod a+x /usr/local/bin/gitlab-runner-generate-config
/usr/local/bin/gitlab-runner-generate-config

cat <<EOX > /usr/lib/systemd/system/gitlab-runner-generate-config.service [Unit]
Description="Refresh gitlab runner config file"

[Service] ExecStart=/usr/local/bin/gitlab-runner-generate-config EOX

cat <<EOY > /usr/lib/systemd/system/gitlab-runner-generate-config.timer [Unit]
Description="Refresh gitlab runner config file every hour"

[Timer] OnCalendar=*:15 Unit=gitlab-runner-generate-config.service

[Install] WantedBy=timers.target

EOY

systemctl enable gitlab-runner-generate-config.timer systemctl start
gitlab-runner-generate-config.timer

# https://docs.gitlab.com/runner/install/bleeding-edge.html

# https://gitlab.com/gitlab-org/gitlab-runner/-/releases

curl -L --output /usr/local/bin/gitlab-runner
https://gitlab-runner-downloads.s3.amazonaws.com/v18.1.1/binaries/gitlab-runner-linux-arm64
&& chmod a+x /usr/local/bin/gitlab-runner useradd --comment 'GitLab Runner'
--create-home gitlab-runner --shell /bin/bash #usermod -aG docker gitlab-runner
gitlab-runner install --user=gitlab-runner
--working-directory=/home/gitlab-runner

#https://docs.gitlab.com/runner/commands/index.html#gitlab-runner-stop-doesnt-shut-down-gracefully
mkdir -p /etc/systemd/system/gitlab-runner.service.d cat <<EOA >
/etc/systemd/system/gitlab-runner.service.d/kill.conf [Service]
KillSignal=SIGQUIT TimeoutStopSec=infinity EOA

systemctl daemon-reload systemctl start gitlab-runner cat <<EONSP1 >
/usr/local/bin/nightly-security-patch #!/bin/bash

logger 'running nightly-security-patch ...' output=$(dnf upgrade 2>&1)
cmd=$(echo "$output" | grep 'dnf upgrade')
if [ -n "$cmd" ]; then upgrade_cmd="$cmd --assumeyes" logger "performing
upgrade: $upgrade_cmd"
    eval "$upgrade_cmd" dnf needs-restarting -r || halt --reboot else logger 'no
upgrade needed' fi

EONSP1 chmod a+x /usr/local/bin/nightly-security-patch

cat <<EONSP2 > /usr/lib/systemd/system/nightly-security-patch.service [Unit]
Description="Run nightly security patch"

[Service] ExecStart=/usr/local/bin/nightly-security-patch EONSP2

cat <<EONSP3 > /usr/lib/systemd/system/nightly-security-patch.timer [Unit]
Description="In early morning"

[Timer] OnCalendar=_-_-* 11:27:00 Unit=nightly-security-patch.service

[Install] WantedBy=timers.target

EONSP3

systemctl enable nightly-security-patch.timer systemctl start
nightly-security-patch.timer
