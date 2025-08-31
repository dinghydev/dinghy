import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SMARTPHONE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.smartphone;',
  },
  _width: 18,
  _height: 30,
}

export function Smartphone(props: DiagramNodeProps) {
  return (
    <Shape {...SMARTPHONE} {...props} _style={extendStyle(SMARTPHONE, props)} />
  )
}
