import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_JOB_AGENTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Elastic_Job_Agents.svg;',
  _width: 64,
  _height: 64,
}

export function ElasticJobAgents(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_JOB_AGENTS} {...props} />
}
