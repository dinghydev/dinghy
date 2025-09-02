import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATERIAL_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.material;',
  },
  _original_width: 60,
  _original_height: 50,
}

export function Material2(props: DiagramNodeProps) {
  return (
    <Shape {...MATERIAL_2} {...props} _style={extendStyle(MATERIAL_2, props)} />
  )
}
