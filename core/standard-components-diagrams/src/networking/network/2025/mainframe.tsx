import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAINFRAME = {
  _style: {
    entity:
      'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.mainframe;network2IconW=0.4721;network2IconH=1;',
  },
  _original_width: 23.605,
  _original_height: 50,
}

export function Mainframe(props: DiagramNodeProps) {
  return (
    <Shape {...MAINFRAME} {...props} _style={extendStyle(MAINFRAME, props)} />
  )
}
