import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOMAIN_AND_WEBSITE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.domain_and_website;',
  },
  _original_width: 51.3,
  _original_height: 41.4,
}

export function DomainAndWebsite(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOMAIN_AND_WEBSITE}
      {...props}
      _style={extendStyle(DOMAIN_AND_WEBSITE, props)}
    />
  )
}
