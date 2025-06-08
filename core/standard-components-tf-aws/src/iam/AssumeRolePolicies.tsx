export const ASSUME_ROLE_EC2_POLICY = JSON.stringify({
  Version: '2012-10-17',
  Statement: [
    {
      Action: 'sts:AssumeRole',
      Principal: {
        Service: 'ec2.amazonaws.com',
      },
      Effect: 'Allow',
    },
  ],
})

export const ASSUME_ROLE_ECS_POLICY = JSON.stringify({
  Version: '2012-10-17',
  Statement: [
    {
      Action: 'sts:AssumeRole',
      Principal: {
        Service: 'ecs-tasks.amazonaws.com',
      },
      Effect: 'Allow',
    },
  ],
})
