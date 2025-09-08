import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FISH_HATCHERY = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.fish_hatchery;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 85,
}

export function FishHatchery(props: DiagramNodeProps) {
  return (
    <Shape
      {...FISH_HATCHERY}
      {...props}
      _style={extendStyle(FISH_HATCHERY, props)}
    />
  )
}
