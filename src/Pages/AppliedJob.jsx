import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import axios from 'axios'
import { HashLoader } from "react-spinners";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';



const AppliedJob = () => {
    const {user} = useAuth()
    
    const {isPending, data: jobs} = useQuery({
        queryKey: ['jobs'],
        queryFn: async ()=>{
            const res = await axios(`http://localhost:5000/applied-jobs/${user?.email}`)
            return res.data
        }
    })


 

    const PDFDocument = () => (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Applied Jobs Summary</Text>
                    <Text style={styles.info}>Name: {user?.displayName}</Text>
                    <Text style={styles.info}>Email: {user?.email}</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableHeader}>Job Title</Text>
                            <Text style={styles.tableHeader}>Category</Text>
                            <Text style={styles.tableHeader}>Employer Name</Text>
                            <Text style={styles.tableHeader}>Salary Range</Text>
                            <Text style={styles.tableHeader}>Applied At</Text>
                        </View>
                        {
                            jobs.map((job, index) => (
                                <View key={index} style={styles.tableRow}>
                                    <Text style={styles.tableData}>{job.jobTitle}</Text>
                                    <Text style={styles.tableData}>{job.category}</Text>
                                    <Text style={styles.tableData}>{job.jobOwner.name}</Text>
                                    <Text style={styles.tableData}>${job.min_salary} - ${job.max_salary}</Text>
                                    <Text style={styles.tableData}>{job.appliedAt}</Text>
                                </View>
                            ))
                        }
                         
                    </View>
                   
                </View>
                
            </Page>
        </Document>
    );

    // Styles for PDF
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            padding: 20
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        },
        header: {
            fontSize: 18,
            marginBottom: 10,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        info:{
            textAlign: 'right',
            fontWeight: 'semibold',
            fontSize: 12
        },
        table: {
            display: 'table',
            width: '100%',
            borderCollapse: 'collapse',
            
        },
        tableRow: {
            flexDirection: 'row',
            display: 'table-row'
        },
        tableHeader: {
            backgroundColor: '#f2f2f2',
            padding: 10,
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 'bold',
            border: '1px solid #ddd',
            width: '25%'
        },
        tableData: {
            padding: 10,
            textAlign: 'center',
            fontSize: 12,
            border: '1px solid #ddd',
            width: '25%'
             
        }
    });

    if (isPending) return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#6A38C2" /></div>;

    
    
    return (
        
        <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
            <h2 className="text-lg font-medium  dark:text-white">All Applied Jobs</h2>
            <select
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option selected disabled value=''>Filter By Category</option>
              <option value='On Site'>On Site Job</option>
              <option value='Remote'>Remote Job</option>
              <option value='Hybrid'>Hybrid Job</option>
              <option value='Part Time'>Part Time Job</option>
            </select>
            <div className="flex items-center mt-4 gap-x-3">

                <PDFDownloadLink document={<PDFDocument></PDFDocument>} fileName="applied_jobs_summary.pdf"> 
                        
                <button  className="w-1/2 px-5 py-2 text-sm  transition-colors duration-200  border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-white dark:border-gray-700">
               Download PDF
            </button>
    </PDFDownloadLink>
              
               
            </div>
        </div>
    
        <div  className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table  className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                                        
                                           
                                            <span>Job Title</span>
                                        
                                    </th>
    
                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                                        Category
                                    </th>
    
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                                       Employer Name
                                    </th>
    
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                                         Salary Range
                                    </th>
    
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right  dark:text-gray-400">
                                    Applied At
                                    </th>
    
                                    
                                </tr>
                            </thead>
                            <tbody className=" divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {
                                    jobs?.map(job=>  <tr key={job._id}>
                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                
        
                                                <div className="flex items-center gap-x-2">
                                                  
                                                       
                                                    </div>
                                                    
                                                    <div>
                                                        <h2 className="font-normal  dark:text-white ">{job.jobTitle}</h2>
                                                        
                                                    </div>
                                                </div>
                                          
                                        </td>
                                        <td className="px-12 py-4 text-sm font-normal whitespace-nowrap">
                                           {job.category}
                                        </td>
                                        <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{job.jobOwner.name}</td>
                                        <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">${job.min_salary} - ${job.max_salary}</td>
                                        <td className="px-4 py-4 text-sm  dark:text-gray-300 whitespace-nowrap">{job?.appliedAt}</td>
                                        
                                    </tr> )
                                }
                               
    
                               
                               
    
    
    
                               
                               
    
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
        
    </section>
    );
};

export default AppliedJob;