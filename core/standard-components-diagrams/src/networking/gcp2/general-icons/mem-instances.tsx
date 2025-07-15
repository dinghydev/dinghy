import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEM_INSTANCES = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.mem_instances',
  _width: 100,
  _height: 87,
}

export function MemInstances(props: DiagramNodeProps) {
  return <Shape {...MEM_INSTANCES} {...props} />
}
