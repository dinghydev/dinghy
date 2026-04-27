import { type NodeProps, Shape, toId } from '@dinghy/base-components'
import { useAwsRoute53Zone } from '../../services/route53/AwsRoute53Zone.tsx'
import { AwsRoute53Record } from '../../services/route53/AwsRoute53Record.tsx'
import { DataAwsRoute53Zone } from '../../services/route53/DataAwsRoute53Zone.tsx'
import { type CnameEntryType, parseCnames } from './types.ts'

const zoneFor = (entry: CnameEntryType): string => {
  if (entry.zone) return entry.zone
  return entry.name.replace(/^\*\./, '').split('.').slice(-2).join('.')
}

export function Cnames(props: NodeProps) {
  const cnames = parseCnames(props.cnames as any)
  const entries = Object.values(cnames)
  const zones = Array.from(new Set(entries.map(zoneFor)))

  const CnamesComponent = props._components?.cnames as typeof Shape || Shape

  return (
    <CnamesComponent _direction='vertical' {...props}>
      {zones.map((zone) => (
        <DataAwsRoute53Zone
          key={zone}
          _id={toId(`cnames_${zone}`)}
          _consolidatedId={toId(`dataawsroute53zone_${zone}`)}
          _title={zone}
          _display='none'
          name={zone}
        />
      ))}
      {entries.map((entry) => <CnameRecord key={entry.name} entry={entry} />)}
      {props.children}
    </CnamesComponent>
  )
}

function CnameRecord({ entry }: { entry: CnameEntryType }) {
  const { route53Zone } = useAwsRoute53Zone(toId(zoneFor(entry)))
  const title = `${entry.name} ➙ ${entry.value}`
  return (
    <AwsRoute53Record
      _id={toId(`awsroute53record_${entry.name.replace(/\*/g, 'star')}`)}
      _title={title}
      _width={title.length * 10}
      _height={20}
      _style='strokeColor=none;'
      type='CNAME'
      name={entry.name}
      ttl={entry.ttl}
      records={() => [entry.value]}
      zone_id={() => route53Zone.id}
    />
  )
}
