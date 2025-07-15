import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WAC_INSTALLER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/WAC_Installer.svg;',
  _width: 68,
  _height: 68,
}

export function WacInstaller(props: DiagramNodeProps) {
  return <Shape {...WAC_INSTALLER} {...props} />
}
