import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOUD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.loud;',
  },
  _width: 30.599999999999998,
  _height: 32.4,
}

export function Loud(props: DiagramNodeProps) {
  return <Shape {...LOUD} {...props} _style={extendStyle(LOUD, props)} />
}
