import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_EXTERNAL_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_External_Management.svg;strokeColor=none;',
  _width: 66.16,
  _height: 68,
}

export function DefenderExternalManagement(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_EXTERNAL_MANAGEMENT} {...props} />
}
