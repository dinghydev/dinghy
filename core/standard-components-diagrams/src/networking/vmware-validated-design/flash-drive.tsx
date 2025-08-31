import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLASH_DRIVE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.flash_drive;',
  _width: 21,
  _height: 50,
}

export function FlashDrive(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLASH_DRIVE}
      {...props}
      _style={extendStyle(FLASH_DRIVE, props)}
    />
  )
}
