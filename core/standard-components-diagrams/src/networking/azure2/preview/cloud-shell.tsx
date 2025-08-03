import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SHELL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Azure_Cloud_Shell.svg;strokeColor=none;',
  _width: 68,
  _height: 48,
}

export function CloudShell(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SHELL} {...props} />
}
