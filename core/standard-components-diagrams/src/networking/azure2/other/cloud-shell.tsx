import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SHELL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Cloud_Shell.svg;',
  _width: 68,
  _height: 47.199999999999996,
}

export function CloudShell(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SHELL} {...props} />
}
