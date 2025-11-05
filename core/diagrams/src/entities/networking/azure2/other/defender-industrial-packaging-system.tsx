import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEFENDER_INDUSTRIAL_PACKAGING_SYSTEM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Industrial_Packaging_System.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DefenderIndustrialPackagingSystem(props: NodeProps) {
  return (
    <Shape
      {...DEFENDER_INDUSTRIAL_PACKAGING_SYSTEM}
      {...props}
      _style={extendStyle(DEFENDER_INDUSTRIAL_PACKAGING_SYSTEM, props)}
    />
  )
}
