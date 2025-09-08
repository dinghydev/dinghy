import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RED_HAT_OPENSHIFT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Azure_Red_Hat_OpenShift.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function RedHatOpenshift(props: DiagramNodeProps) {
  return (
    <Shape
      {...RED_HAT_OPENSHIFT}
      {...props}
      _style={extendStyle(RED_HAT_OPENSHIFT, props)}
    />
  )
}
