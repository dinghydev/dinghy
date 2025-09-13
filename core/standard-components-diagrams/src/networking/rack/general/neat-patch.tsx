import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NEAT_PATCH = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rackGeneral.neatPatch;',
  },
  _width: 160,
  _height: 30,
}

export function NeatPatch(props: DiagramNodeProps) {
  return (
    <Shape {...NEAT_PATCH} {...props} _style={extendStyle(NEAT_PATCH, props)} />
  )
}
