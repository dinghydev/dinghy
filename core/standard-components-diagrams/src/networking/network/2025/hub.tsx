import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HUB = {
  _style: {
    entity:
      'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.hub;network2IconXOffset=0.0001;network2IconYOffset=0.0129;network2IconW=1;network2IconH=0.2938;',
  },
  _original_width: 50,
  _original_height: 14.69,
}

export function Hub(props: DiagramNodeProps) {
  return <Shape {...HUB} {...props} _style={extendStyle(HUB, props)} />
}
