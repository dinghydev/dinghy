import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FISH_HATCHERY = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.fish_hatchery;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 85,
}

export function FishHatchery(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FISH_HATCHERY)} />
}
