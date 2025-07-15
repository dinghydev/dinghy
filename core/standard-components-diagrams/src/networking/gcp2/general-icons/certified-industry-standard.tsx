import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CERTIFIED_INDUSTRY_STANDARD = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.certified_industry_standard',
  _width: 100,
  _height: 78,
}

export function CertifiedIndustryStandard(props: DiagramNodeProps) {
  return <Shape {...CERTIFIED_INDUSTRY_STANDARD} {...props} />
}
