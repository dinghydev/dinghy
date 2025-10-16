import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPENSHIFT = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/OpenShift.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function Openshift(props: DiagramNodeProps) {
  return (
    <Shape {...OPENSHIFT} {...props} _style={extendStyle(OPENSHIFT, props)} />
  )
}
