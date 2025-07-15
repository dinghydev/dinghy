import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SNOWFLAKE = {
  _style:
    'shape=mxgraph.signs.nature.snowflake;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 87,
  _height: 98,
}

export function Snowflake(props: DiagramNodeProps) {
  return <Shape {...SNOWFLAKE} {...props} />
}
