import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function HeavyBundle() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{ label: 'Sales', data: [10, 20, 30] }],
      },
    })

    return () => chart.destroy()
  }, [])

  return <canvas ref={canvasRef} />
}
