import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOAD_LEVELING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.load_leveling;',
  },
  _width: 100,
  _height: 30,
}

export function LoadLeveling(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOAD_LEVELING)} />
}
