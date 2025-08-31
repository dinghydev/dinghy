import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EMAS_ENTERPRISE_MOBILE_APPLICATION_STUDIO = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.emas_enterprise_mobile_application_studio;',
  },
  _width: 43.199999999999996,
  _height: 41.699999999999996,
}

export function EmasEnterpriseMobileApplicationStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...EMAS_ENTERPRISE_MOBILE_APPLICATION_STUDIO}
      {...props}
      _style={extendStyle(EMAS_ENTERPRISE_MOBILE_APPLICATION_STUDIO, props)}
    />
  )
}
