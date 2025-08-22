import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generateProposalPDF = async () => {
  try {
    // Create a new PDF document with A4 size
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 20
    const contentWidth = pageWidth - (2 * margin)
    
    // Set up fonts and colors
    pdf.setFont('helvetica')
    
    // Add House of Yugen branding header
    pdf.setFillColor(212, 175, 55) // yugen-gold
    pdf.rect(0, 0, pageWidth, 30, 'F')
    
    pdf.setTextColor(10, 10, 10) // yugen-black
    pdf.setFontSize(24)
    pdf.setFont('helvetica', 'bold')
    pdf.text('House of Yugen', margin, 20)
    
    pdf.setFontSize(14)
    pdf.text('Custom Voting Platform Proposal', margin, 30)
    
    // Add date
    pdf.setFontSize(10)
    pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, margin, 40)
    
    // Content sections
    let yPosition = 50
    
    // Executive Summary
    addSection(pdf, 'Executive Summary', yPosition, pageWidth, margin)
    yPosition += 20
    
    pdf.setFontSize(10)
    pdf.setTextColor(80, 80, 80)
    const summaryText = `Transform your events with a luxury-grade, fully branded voting system that seamlessly integrates with your global reach. This proposal outlines our comprehensive solution for House of Yugen's custom voting platform, designed to maximize revenue, enhance brand control, and provide full ownership of your digital experience.`
    
    const summaryLines = pdf.splitTextToSize(summaryText, contentWidth)
    pdf.text(summaryLines, margin, yPosition)
    yPosition += summaryLines.length * 5 + 20
    
    // Vision & Value Proposition
    addSection(pdf, 'Vision & Value Proposition', yPosition, pageWidth, margin)
    yPosition += 20
    
    const visionText = `• Break free from third-party limitations and create a bespoke platform
• Strengthen fan engagement with a luxury-grade, fully branded voting system
• Capture revenue directly, maximizing profitability and eliminating platform fees
• Establish long-term ownership of user data and intellectual property rights`
    
    const visionLines = pdf.splitTextToSize(visionText, contentWidth)
    pdf.text(visionLines, margin, yPosition)
    yPosition += visionLines.length * 5 + 20
    
    // Technical Foundation
    addSection(pdf, 'Technical Foundation', yPosition, pageWidth, margin)
    yPosition += 20
    
    const techText = `• Frontend: Next.js (modern, scalable web framework)
• Backend: PostgreSQL/Supabase (reliable, performant database solution)
• Hosting: AWS/Vercel (industry-leading cloud infrastructure for global reach)
• Features: Secure payment processors, admin dashboard, real-time analytics`
    
    const techLines = pdf.splitTextToSize(techText, contentWidth)
    pdf.text(techLines, margin, yPosition)
    yPosition += techLines.length * 5 + 20
    
    // Investment Structure
    addSection(pdf, 'Investment Structure', yPosition, pageWidth, margin)
    yPosition += 20
    
    pdf.setFontSize(12)
    pdf.setTextColor(212, 175, 55)
    pdf.text('Labour & Project Management Fee: 150,000 PHP', margin, yPosition)
    yPosition += 10
    
    pdf.setFontSize(10)
    pdf.setTextColor(80, 80, 80)
    const investmentText = `This comprehensive fee covers:
• Complete platform development
• Project management and coordination
• Testing, deployment, and quality assurance
• Ongoing support and maintenance setup`
    
    const investmentLines = pdf.splitTextToSize(investmentText, contentWidth)
    pdf.text(investmentLines, margin, yPosition)
    yPosition += investmentLines.length * 5 + 20
    
    // Roadmap
    addSection(pdf, 'Development Roadmap', yPosition, pageWidth, margin)
    yPosition += 20
    
    const roadmapText = `Phase 1: Prototype (100-150 hrs) - Core voting functionality
Phase 2: Demo & Revisions (40 hrs) - Client review and adjustments
Phase 3: Payment Integration (10-20 hrs) - Secure payment gateways
Phase 4: Stress Testing (10-20 hrs) - Performance and load testing
Phase 5: Branding Integration (40 hrs) - Full visual alignment
Phase 6: Soft Launch (40 hrs) - Controlled release and final checks`
    
    const roadmapLines = pdf.splitTextToSize(roadmapText, contentWidth)
    pdf.text(roadmapLines, margin, yPosition)
    yPosition += roadmapLines.length * 5 + 20
    
    // Success Metrics
    addSection(pdf, 'Success Metrics', yPosition, pageWidth, margin)
    yPosition += 20
    
    const successText = `• 100% Brand Control - Complete ownership of your platform
• 0% Platform Fees - Direct revenue capture, no third-party costs
• ∞ Scalability - Designed to handle high traffic for major events
• Full Data Ownership - Complete control over user data and insights`
    
    const successLines = pdf.splitTextToSize(successText, contentWidth)
    pdf.text(successLines, margin, yPosition)
    yPosition += successLines.length * 5 + 20
    
    // Next Steps
    addSection(pdf, 'Next Steps', yPosition, pageWidth, margin)
    yPosition += 20
    
    const nextStepsText = `Option 1: Full Approval - Approve the 150,000 PHP fee for comprehensive build
Option 2: Initial Deposit - Begin with 20,000 PHP deposit to fund detailed scope and prototype

Both options include our complete commitment to your success and ongoing partnership.`
    
    const nextStepsLines = pdf.splitTextToSize(nextStepsText, contentWidth)
    pdf.text(nextStepsLines, margin, yPosition)
    
    // Footer
    pdf.setFillColor(212, 175, 55)
    pdf.rect(0, pageHeight - 20, pageWidth, 20, 'F')
    
    pdf.setTextColor(10, 10, 10)
    pdf.setFontSize(10)
    pdf.text('House of Yugen - Custom Voting Platform Proposal', margin, pageHeight - 10)
    pdf.text('Contact: [Your Contact Information]', pageWidth - margin - 60, pageHeight - 10)
    
    // Save the PDF
    pdf.save('House-of-Yugen-Voting-Platform-Proposal.pdf')
    
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('There was an error generating the PDF. Please try again.')
  }
}

const addSection = (pdf, title, yPosition, pageWidth, margin) => {
  pdf.setFontSize(16)
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(212, 175, 55) // yugen-gold
  pdf.text(title, margin, yPosition)
  
  // Add subtle line under section title
  pdf.setDrawColor(212, 175, 55)
  pdf.setLineWidth(0.5)
  pdf.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2)
}
