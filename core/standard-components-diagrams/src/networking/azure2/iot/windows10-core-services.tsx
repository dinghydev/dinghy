import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS10_CORE_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Windows10_Core_Services.svg;',
  _width: 68,
  _height: 68,
}

export function Windows10CoreServices(props: DiagramNodeProps) {
  return <Shape {...WINDOWS10_CORE_SERVICES} {...props} />
}
