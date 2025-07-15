import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOMAIN_AND_WEBSITE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.domain_and_website;',
  _width: 51.3,
  _height: 41.4,
}

export function DomainAndWebsite(props: DiagramNodeProps) {
  return <Shape {...DOMAIN_AND_WEBSITE} {...props} />
}
