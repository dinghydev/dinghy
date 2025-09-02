import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_JOB_AGENTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Elastic_Job_Agents.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function ElasticJobAgents(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_JOB_AGENTS}
      {...props}
      _style={extendStyle(ELASTIC_JOB_AGENTS, props)}
    />
  )
}
