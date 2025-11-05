import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENTERPRISE_APPLICATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Enterprise_Applications.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function EnterpriseApplications(props: NodeProps) {
  return (
    <Shape
      {...ENTERPRISE_APPLICATIONS}
      {...props}
      _style={extendStyle(ENTERPRISE_APPLICATIONS, props)}
    />
  )
}
