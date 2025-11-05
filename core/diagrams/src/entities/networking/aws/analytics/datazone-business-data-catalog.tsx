import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATAZONE_BUSINESS_DATA_CATALOG = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.datazone_business_data_catalog;',
  },
  _original_width: 71,
  _original_height: 78,
}

export function DatazoneBusinessDataCatalog(props: NodeProps) {
  return (
    <Shape
      {...DATAZONE_BUSINESS_DATA_CATALOG}
      {...props}
      _style={extendStyle(DATAZONE_BUSINESS_DATA_CATALOG, props)}
    />
  )
}
