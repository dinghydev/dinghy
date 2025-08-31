import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOAD_LEVELING = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.load_leveling;',
  _width: 100,
  _height: 30,
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
