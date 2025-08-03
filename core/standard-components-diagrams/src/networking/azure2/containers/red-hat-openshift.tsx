import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RED_HAT_OPENSHIFT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Azure_Red_Hat_OpenShift.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function RedHatOpenshift(props: DiagramNodeProps) {
  return <Shape {...RED_HAT_OPENSHIFT} {...props} />
}
