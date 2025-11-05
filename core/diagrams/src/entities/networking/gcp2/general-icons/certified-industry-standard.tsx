import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CERTIFIED_INDUSTRY_STANDARD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.certified_industry_standard',
  },
  _width: 100,
  _height: 78,
}

export function CertifiedIndustryStandard(props: NodeProps) {
  return (
    <Shape
      {...CERTIFIED_INDUSTRY_STANDARD}
      {...props}
      _style={extendStyle(CERTIFIED_INDUSTRY_STANDARD, props)}
    />
  )
}
