import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WAC_INSTALLER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/WAC_Installer.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function WacInstaller(props: NodeProps) {
  return (
    <Shape
      {...WAC_INSTALLER}
      {...props}
      _style={extendStyle(WAC_INSTALLER, props)}
    />
  )
}
