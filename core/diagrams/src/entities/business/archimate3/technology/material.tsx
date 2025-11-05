import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MATERIAL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=material;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Material(props: NodeProps) {
  return (
    <Shape {...MATERIAL} {...props} _style={extendStyle(MATERIAL, props)} />
  )
}
