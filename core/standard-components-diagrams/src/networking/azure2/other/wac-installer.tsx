import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WAC_INSTALLER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/WAC_Installer.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function WacInstaller(props: DiagramNodeProps) {
  return (
    <Shape
      {...WAC_INSTALLER}
      {...props}
      _style={extendStyle(WAC_INSTALLER, props)}
    />
  )
}
