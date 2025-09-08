import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOAD_LEVELING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.load_leveling;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function LoadLeveling(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_LEVELING}
      {...props}
      _style={extendStyle(LOAD_LEVELING, props)}
    />
  )
}
