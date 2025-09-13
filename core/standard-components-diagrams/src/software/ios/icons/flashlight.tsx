import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLASHLIGHT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.flashlight;',
  },
  _width: 15,
  _height: 30,
}

export function Flashlight(props: DiagramNodeProps) {
  return (
    <Shape {...FLASHLIGHT} {...props} _style={extendStyle(FLASHLIGHT, props)} />
  )
}
