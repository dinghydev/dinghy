import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINAL = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.terminal;network2IconW=0.8554;network2IconH=1;',
  },
  _original_width: 42.77,
  _original_height: 50,
}

export function Terminal(props: DiagramNodeProps) {
  return (
    <Shape {...TERMINAL} {...props} _style={extendStyle(TERMINAL, props)} />
  )
}
