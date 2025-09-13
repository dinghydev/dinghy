import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOME = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.home;',
  },
  _width: 24,
  _height: 25.5,
}

export function Home(props: DiagramNodeProps) {
  return <Shape {...HOME} {...props} _style={extendStyle(HOME, props)} />
}
