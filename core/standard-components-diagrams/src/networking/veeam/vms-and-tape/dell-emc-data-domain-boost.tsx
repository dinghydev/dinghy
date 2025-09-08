import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DELL_EMC_DATA_DOMAIN_BOOST = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.emc_data_domain_boost;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function DellEmcDataDomainBoost(props: DiagramNodeProps) {
  return (
    <Shape
      {...DELL_EMC_DATA_DOMAIN_BOOST}
      {...props}
      _style={extendStyle(DELL_EMC_DATA_DOMAIN_BOOST, props)}
    />
  )
}
