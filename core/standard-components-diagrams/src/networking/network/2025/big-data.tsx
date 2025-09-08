import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BIG_DATA = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.big_data;network2IconXOffset=-0.0002;network2IconYOffset=0.0015;network2IconW=1;network2IconH= 0.996;',
  },
  _original_width: 50,
  _original_height: 49.8,
}

export function BigData(props: DiagramNodeProps) {
  return (
    <Shape {...BIG_DATA} {...props} _style={extendStyle(BIG_DATA, props)} />
  )
}
