import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SYSTEMS_CHECK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.systems_check',
  },
  _original_width: 99,
  _original_height: 100,
}

export function SystemsCheck(props: DiagramNodeProps) {
  return (
    <Shape
      {...SYSTEMS_CHECK}
      {...props}
      _style={extendStyle(SYSTEMS_CHECK, props)}
    />
  )
}
