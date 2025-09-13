import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FISH_CLEANING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.fish_cleaning;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 63,
}

export function FishCleaning(props: DiagramNodeProps) {
  return (
    <Shape
      {...FISH_CLEANING}
      {...props}
      _style={extendStyle(FISH_CLEANING, props)}
    />
  )
}
