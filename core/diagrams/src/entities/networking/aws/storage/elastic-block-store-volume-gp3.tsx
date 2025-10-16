import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELASTIC_BLOCK_STORE_VOLUME_GP3 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_block_store_volume_gp3;',
  },
  _original_width: 64,
  _original_height: 78,
}

export function ElasticBlockStoreVolumeGp3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_BLOCK_STORE_VOLUME_GP3}
      {...props}
      _style={extendStyle(ELASTIC_BLOCK_STORE_VOLUME_GP3, props)}
    />
  )
}
