import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_BLOCK_STORE_AMAZON_DATA_LIFECYCLE_MANAGER = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_block_store_amazon_data_lifecycle_manager;',
  _width: 76,
  _height: 78,
}

export function ElasticBlockStoreAmazonDataLifecycleManager(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...ELASTIC_BLOCK_STORE_AMAZON_DATA_LIFECYCLE_MANAGER} {...props} />
  )
}
