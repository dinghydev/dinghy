import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IGNITER_PLUG = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.igniter_plug2',
  _width: 72,
  _height: 39,
}

export function IgniterPlug(props: DiagramNodeProps) {
  return (
    <Shape
      {...IGNITER_PLUG}
      {...props}
      _style={extendStyle(IGNITER_PLUG, props)}
    />
  )
}
