import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_INDUSTRIAL_PRINTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Industrial_Printer.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function DefenderIndustrialPrinter(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_INDUSTRIAL_PRINTER} {...props} />
}
