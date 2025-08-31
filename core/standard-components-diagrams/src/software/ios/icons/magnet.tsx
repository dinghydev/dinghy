import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAGNET = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.magnet;pointerEvents=1',
  },
  _width: 24,
  _height: 30,
}

export function Magnet(props: DiagramNodeProps) {
  return <Shape {...MAGNET} {...props} _style={extendStyle(MAGNET, props)} />
}
