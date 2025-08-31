import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTERPRISE_WEBSITE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.enterprise_website;',
  _width: 53.1,
  _height: 41.4,
}

export function EnterpriseWebsite(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTERPRISE_WEBSITE}
      {...props}
      _style={extendStyle(ENTERPRISE_WEBSITE, props)}
    />
  )
}
