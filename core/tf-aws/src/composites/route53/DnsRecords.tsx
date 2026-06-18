import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import { useAwsRoute53Zone } from '../../services/route53/AwsRoute53Zone.tsx'
import { AwsRoute53Record } from '../../services/route53/AwsRoute53Record.tsx'
import { DnsZone } from './DnsZone.tsx'
import { type DnsRecordType, parseDnsRecords } from './types.ts'

const zoneFor = (entry: DnsRecordType): string => {
  if (entry.zone) return entry.zone
  return entry.name.replace(/^\*\./, '').split('.').slice(-2).join('.')
}

export function DnsRecords(props: NodeProps) {
  const dnsRecords = parseDnsRecords(props.dnsRecords as any)
  const entries = Object.values(dnsRecords)
  const zones = Array.from(new Set(entries.map(zoneFor)))

  const DnsRecordsComponent = props._components?.dnsRecords as typeof Shape ||
    Shape

  return (
    <DnsRecordsComponent _direction='vertical' {...props}>
      {zones.map((zone) => (
        <DnsZone key={zone} zone={zone} idPrefix='dnsrecords' />
      ))}
      {entries.map((entry) => (
        <DnsRecord key={`${entry.type}_${entry.name}`} entry={entry} />
      ))}
      {props.children}
    </DnsRecordsComponent>
  )
}

function DnsRecord({ entry }: { entry: DnsRecordType }) {
  const { route53Zone } = useAwsRoute53Zone(toId(zoneFor(entry)))
  const records = entry.records ?? (entry.value ? [entry.value] : undefined)
  const title = `${entry.name} (${entry.type})`
  return (
    <AwsRoute53Record
      _id={toId(
        `awsroute53record_${entry.type}_${entry.name.replace(/\*/g, 'star')}`,
      )}
      _title={title}
      _width={title.length * 10}
      _height={20}
      _style='strokeColor=none;'
      {...entry}
      records={records ? () => records : undefined}
      zone_id={() => route53Zone.id}
    />
  )
}
