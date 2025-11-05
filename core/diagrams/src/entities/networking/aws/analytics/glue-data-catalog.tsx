import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLUE_DATA_CATALOG = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.glue_data_catalog;',
  },
  _original_width: 72,
  _original_height: 78,
}

export function GlueDataCatalog(props: NodeProps) {
  return (
    <Shape
      {...GLUE_DATA_CATALOG}
      {...props}
      _style={extendStyle(GLUE_DATA_CATALOG, props)}
    />
  )
}
